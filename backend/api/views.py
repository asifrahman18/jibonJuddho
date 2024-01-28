from rest_framework import viewsets
from api.models import Job, Company
from .serializers import JobSerializer, SignUpSerializer, UserSerializer, CompanySerializer

from rest_framework.views import APIView
from rest_framework.response import Response

from django.shortcuts import get_object_or_404
from django.db.models import Count, Max, Min, Avg

from rest_framework import status, viewsets, generics

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from .filters import JobsFilter, CompanyFilter

from rest_framework.permissions import IsAuthenticated

class AllJobsView(APIView):
    def get(self, request, format=None):
        filterset = JobsFilter(request.GET, queryset=Job.objects.all().order_by('id'))
        serializer = JobSerializer(filterset.qs, many=True)
        return Response(serializer.data)

class JobDetailView(APIView):

    def get(self, request, pk):
        try: 
            job = Job.objects.get(id=pk) 
            serializer = JobSerializer(job) 
            return Response(serializer.data)
        except Job.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class JobCreateView(generics.CreateAPIView):
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        company_id = self.kwargs.get('company_id')
        company = get_object_or_404(Company, pk=company_id)
        serializer.save(company=company, user=self.request.user)



class UpdateJobView(APIView):
    def get_object(self, pk):
        try:
            return Job.objects.get(pk=pk)
        except Job.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        job = self.get_object(pk)
        serializer = JobSerializer(job)
        return Response(serializer.data)
    
    def put(self, request, pk):
        try:
            job = Job.objects.get(pk=pk)
        except Job.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND) 
        
        serializer = JobSerializer(job, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TopicStatView(APIView):
    def get(self, request, topic, format=None):
        args = {'title__icontains': topic}
        jobs = Job.objects.filter(**args)

        if len(jobs) == 0:
            return Response({'message': 'No jobs found!'}, status=status.HTTP_404_NOT_FOUND)

        stats = jobs.aggregate(
            count=Count('id'),
            avg_salary=Avg('salary'),
            min_salary=Min('salary'),
            max_salary=Max('salary'),
        )

        return Response(stats)



class DeleteJobView(APIView):
    def delete(self, request, pk, format=None):
        job = get_object_or_404(Job, pk=pk)
        job.delete()
        return Response({'message': 'Job deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


class RegisterView(APIView):
    def post(self, request, format=None):
        data = request.data
        user_serializer = SignUpSerializer(data=data)

        if user_serializer.is_valid():
            if not User.objects.filter(email=data['email']).exists():
                user = User.objects.create(
                    first_name=data['first_name'],
                    last_name=data['last_name'],
                    email=data['email'],
                    password=make_password(data['password']),
                    username=data['email']
                )
                return Response(status=status.HTTP_201_CREATED)
            else:
                return Response({'message': 'User with this email already exists!'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user_serializer = UserSerializer(request.user)
        return Response(user_serializer.data, status=status.HTTP_200_OK)



class AllCompaniesView(APIView):
    def get(self, request, format=None):
        filterset = CompanyFilter(request.GET, queryset=Company.objects.all().order_by('id'))
        serializer = CompanySerializer(filterset.qs, many=True)
        return Response(serializer.data)


class UserCompaniesView(APIView):
    def get(self, request, pk, format=None):
        user = get_object_or_404(User, id=pk)
        user_companies = Company.objects.filter(user=user).order_by('id')
        serializer = CompanySerializer(user_companies, many=True)
        return Response(serializer.data)



class CompanyDetailView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk):
        try: 
            job = Company.objects.get(id=pk) 
            serializer = CompanySerializer(job) 
            return Response(serializer.data)
        except Job.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)



class CompanyCreateView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
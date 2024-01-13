from rest_framework import viewsets
from api.models import Job
from api.serializers import JobSerializer

from rest_framework.views import APIView
from rest_framework.response import Response


class JobsViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobDetailView(APIView):

    def get(self, request, pk):
        try: 
            job = Job.objects.get(id=pk) 
            serializer = JobSerializer(job) 
            return Response(serializer.data)
        except Job.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class AddJobView(APIView):
    def post(self, request):

        title = request.data.get('title') 
        description = request.data.get('description')
        email = request.data.get('email')
        location = request.data.get('location')
        job_type = request.data.get('jobType')
        qualification = request.data.get('qualification')
        salary = request.data.get('salary') 
        openings = request.data.get('openings')
        company = request.data.get('company')
        user = request.data.get('user')
        

        job = Job() 
        job.title = title
        job.description = description
        job.email = email
        job.location = location
        job.jobType = job_type
        job.qualification = qualification
        job.salary = salary
        job.openings = openings 
        job.company = company
        job.user = request.user
        

        job.save()
        
        return Response(status=status.HTTP_201_CREATED)



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


# @api_view(['PUT'])
# def UpdateJobView(request, pk):
    
#     job = Job.objects.get(id=pk)
    
#     job.title = request.data['title']
#     job.description = request.data['description']
#     job.email = request.data['email']
#     job.location = request.data['location']
#     job.jobType = request.data['jobType']
#     job.qualification = request.data['qualification']
#     job.salary = request.data['salary']
#     job.openings = request.data['openings']
#     job.expiresAt = request.data['expiresAt']
    
#     job.save()
    
#     serializer = JobSerializer(job, many=False)
    
#     return Response(serializer.data)
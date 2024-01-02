from rest_framework import viewsets
from api.models import Job
from api.serializers import JobSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
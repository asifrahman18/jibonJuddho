from rest_framework import serializers
from api.models import Job
from django.contrib.auth import get_user_model

class JobSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Job
        
        fields = '__all__'
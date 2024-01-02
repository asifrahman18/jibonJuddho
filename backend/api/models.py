from django.db import models
from datetime import *
from django.contrib.auth.models import User

# Create your models here.


class JobType(models.TextChoices):
    Training = 'Training'
    Internship = 'Internship'
    FullTime = 'FullTime'
    PartTime = 'PartTime'

class Qualification(models.TextChoices):
    Any = 'Any'
    SSC = 'SSC or equivalent'
    HSC = 'HSC or equivalent'
    Undergraduate = 'Undergraduate'
    Postgraduate = 'Postgraduate'

def expireDate():
    now = datetime.now()
    return now + timedelta(days=30)


class Job(models.Model):
    title= models.CharField(max_length=200, null=True)
    description= models.TextField
    email= models.EmailField
    location= models.CharField(max_length=200, null=True)
    jobType= models.CharField(
        max_length=10,
        choices = JobType.choices,
        default = JobType.Training,
        )
    qualification= models.CharField(
        max_length=25,
        choices = Qualification.choices,
        default = Qualification.Any,
    )
    salary= models.IntegerField(default=0)
    openings= models.IntegerField(default=1)
    createdAt= models.DateTimeField(auto_now_add=True, null=True)
    expiresAt= models.DateTimeField(expireDate, null=True)
    #company= models.ForeignKey(Company, on_delete=models.SET_NULL)
    company= models.CharField(max_length=30, null=True)
    user= models.ForeignKey(User, on_delete=models.CASCADE, null=True)
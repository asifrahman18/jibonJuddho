from django.db import models
from datetime import *
from django.contrib.auth.models import User

# Create your models here.




class Company(models.Model):
    name= models.CharField(max_length=200,null=True)
    description= models.TextField(null=True)
    email= models.EmailField(null=True)
    location= models.CharField(max_length=200,null=True)

    createdAt= models.DateTimeField(auto_now_add=True,null=True)
    phone = models.CharField(max_length=15, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='companies')
    
    
    def __str__(self):
        return f"{self.name}"


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
    title= models.CharField(max_length=200,null=True)
    description= models.TextField(null=True)
    email= models.EmailField(null=True)
    location= models.CharField(max_length=200,null=True)
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
    salary= models.IntegerField(default=0,null=True)
    openings= models.IntegerField(default=1,null=True)
    createdAt= models.DateTimeField(auto_now_add=True,null=True)
    expiresAt= models.DateTimeField(expireDate,null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True, related_name='jobs')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='user_jobs')
    
    def __str__(self):
        return f"{self.title}"


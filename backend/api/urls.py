from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import AllJobsView, AddJobView, UpdateJobView, JobDetailView, DeleteJobView, TopicStatView, RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView, TokenRefreshView

router = DefaultRouter()
#router.register(r'job', JobsViewSet, basename='job')


urlpatterns = [
    path('', include(router.urls)),
    
    #list all jobs
    path('job/', AllJobsView.as_view(), name='job'),
    
    #detail view of a job
    path('job/<str:pk>/', JobDetailView.as_view(), name='job'),
    
    
    path('job/add/', AddJobView.as_view(), name='addJob'),
    path('job/<str:pk>/update/', UpdateJobView.as_view(), name='updateJob'),
    
    
    #delete a job
    path('jobs/<str:pk>/delete', DeleteJobView.as_view(), name='delete_job'),
    
    #show all job stats based on topic
    path('jobs/stat/<str:topic>/', TopicStatView.as_view(), name='topic_stat'),
    
    #register a user
    path('user/register/', RegisterView.as_view(), name='register'),
    
    
    #token authentication using username and password
    path('user/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/token/verify/', TokenVerifyView.as_view(), name='token_refresh'),
]
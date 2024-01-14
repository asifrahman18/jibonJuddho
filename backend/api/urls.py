from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import AllJobsView, AddJobView, UpdateJobView, JobDetailView, DeleteJobView, TopicStatView, RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView, TokenRefreshView

router = DefaultRouter()
#router.register(r'job', JobsViewSet, basename='job')


urlpatterns = [
    path('', include(router.urls)),
    path('job/', AllJobsView.as_view(), name='job'),
    path('job/<str:pk>/', JobDetailView.as_view(), name='job'),
    path('job/add/', AddJobView.as_view(), name='addJob'),
    path('job/<str:pk>/update/', UpdateJobView.as_view(), name='updateJob'),
    
    path('jobs/<str:pk>/delete', DeleteJobView.as_view(), name='delete_job'),
    
    path('jobs/stat/<str:topic>/', TopicStatView.as_view(), name='topic_stat'),


    path('user/register/', RegisterView.as_view(), name='register'),
    
    path('user/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/token/verify/', TokenVerifyView.as_view(), name='token_refresh'),
]
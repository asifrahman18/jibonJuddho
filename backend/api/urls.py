from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import AllJobsView, UpdateJobView, JobDetailView, DeleteJobView, TopicStatView, RegisterView, CurrentUserView, CompanyCreateView, AllCompaniesView, CompanyDetailView, JobCreateView, UserCompaniesView, CompanyJobView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView, TokenRefreshView

router = DefaultRouter()
#router.register(r'job', JobsViewSet, basename='job')


urlpatterns = [
    path('', include(router.urls)),
    
    #list all jobs
    path('job/', AllJobsView.as_view(), name='job'),
    
    #detail view of a job
    path('job/<str:pk>/', JobDetailView.as_view(), name='job'),
    
    #detail view of a job
    path('company/job/<str:pk>/', CompanyJobView.as_view(), name='company_job'),
    
    
    path('job/<str:pk>/update/', UpdateJobView.as_view(), name='updateJob'),
    
    
    #delete a job
    path('jobs/<str:pk>/delete', DeleteJobView.as_view(), name='delete_job'),
    
    #show all job stats based on topic
    path('jobs/stat/<str:topic>/', TopicStatView.as_view(), name='topic_stat'),
    
    #register a user
    path('user/register/', RegisterView.as_view(), name='register'),
    
    
    #see logged in user informations
    path('user/me/', CurrentUserView.as_view(), name='current_user'),
    
    
    
    #token authentication using username and password
    path('user/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/token/verify/', TokenVerifyView.as_view(), name='token_refresh'),
    
    
    
    #create company from user
    path('company/register/', CompanyCreateView.as_view(), name='register_company'),
    
    
    
    #list all companies
    path('companies/', AllCompaniesView.as_view(), name='all_companies'),
    
    
    #companies of a specific user
    path('company/<int:pk>/', UserCompaniesView.as_view(), name='user_companies'),
    
    
    #view company details (need some attention: authorized users can see any company details)
    path('user/company/<int:pk>/', CompanyDetailView.as_view(), name='view_company'),
    
    
    
    #add jobs from a company
    path('company/<int:company_id>/add-job/', JobCreateView.as_view(), name='add_job'),
    
    # todo
    
    
    
    
    
    
    
    

]
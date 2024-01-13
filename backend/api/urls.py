from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import JobsViewSet, AddJobView, UpdateJobView, JobDetailView

router = DefaultRouter()
router.register(r'job', JobsViewSet, basename='job')


urlpatterns = [
    path('', include(router.urls)),
    path('job/<str:pk>/', JobDetailView.as_view(), name='job'),
    path('job/add/', AddJobView.as_view(), name='addJob'),
    path('job/<str:pk>/update/', UpdateJobView.as_view(), name='updateJob'),
]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import JobViewSet

router = DefaultRouter()
router.register(r'job', JobViewSet, basename='job')


urlpatterns = [
    path('', include(router.urls)),
]
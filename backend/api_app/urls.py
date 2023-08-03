from django.urls import path, include
from rest_framework import routers
from api_app.views import EmployeeViewSets

router = routers.DefaultRouter()
router.register(r'employee', EmployeeViewSets)
urlpatterns = [
    path('', include(router.urls)),
]
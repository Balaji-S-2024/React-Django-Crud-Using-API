from django.shortcuts import render
from rest_framework import viewsets
from api_app.models import Employee
from api_app.serializers import EmployeeSerializer

# Create your views here.

class EmployeeViewSets(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

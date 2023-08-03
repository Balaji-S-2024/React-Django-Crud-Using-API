from rest_framework import serializers
from api_app.models import Employee     

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields = ['emp_id', 'fname', 'lname', 'dept']

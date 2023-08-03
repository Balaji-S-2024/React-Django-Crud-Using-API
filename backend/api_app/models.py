from django.db import models

# Create your models here.

class Employee(models.Model):
    emp_id = models.BigAutoField(primary_key=True)
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    dept = models.CharField(max_length=50)

    def __str__(self):
        return self.fname
    


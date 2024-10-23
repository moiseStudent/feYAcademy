from django.db import models

"""
Clase padre, el resto de clases extendera de la clase Users, para poder asignar
propiedades a cada elemento por separado.
"""

class Users(models.Model):
    """
    Lista de tuplas para definir las opciones de rol que un usuario puede tener
    el segundo valor de la tupla es guardado en la base de datos, miestras que el
    primero es leido por el humano.
    """
    USERS_TYPE = [
        ('student', 'Student'),
        ('teacher', 'Teacher'),
        ('administrator', 'Administrator'),
    ]

    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    registration_date = models.DateTimeField(auto_now_add=True)

    ### Documento nacional de identificacion en Venezuela.
    ci = models.IntegerField()

    user_type = models.CharField(
        max_length = 15,
        choices = USERS_TYPE
    )


### Hereda propiedades de Users
class Student(models.Model):
    """
    Lista de tuplas para seleccionar las opciones de estudio disponibles
    """
    STUDY_AREAS = [
        ('electricity', 'Electricity'),
        ('metalworking', 'Metalworking'),
        ('secretarial_work', 'Secretarial_work'),
        ('refrigeration', 'Refrigeration'),
    ]

    user = models.OneToOneField(
        Users,
        on_delete = models.CASCADE,
        primary_key=True
    )

    birthdate = models.DateField()
    study_areas = models.CharField(
        max_length = 100,
        choices = STUDY_AREAS,
    )

    """
    Permite opciones desde el 1 hasta el 6, genera una lista de tuplas con un entero
    y un string de forma automatica dentro de de la variable choice para restringir 
    las opciones permitidas.
    """
    grade = models.IntegerField(
        choices = [(i, str(i)) for i in range(1, 7)]
        )


class Teacher(models.Model):
    user = models.OneToOneField(Users, on_delete = models.CASCADE, primary_key=True)
    ### Agregar materias que imparte, deben provenir de una tabla de asignatura.

class Administrator(models.Model):
    user = models.OneToOneField(Users, on_delete = models.CASCADE, primary_key=True)

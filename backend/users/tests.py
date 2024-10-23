from django.test import TestCase
from faker import Faker
from .models import Users
import random

class UserTestCase(TestCase):

    def setUp(self):
        self.fake = Faker()
        user_type_list = [
            "student",
            "teacher",
            "administrator"
        ]

        for fake_user in range(100):

            Users.objects.create(
                name = self.fake.name(),
                surname = self.fake.last_name(),
                email = self.fake.email(),
                password = self.fake.password(),
                ci = random.randint(11222333,22333444),
                user_type = user_type_list[random.randint(0,2)]
            )
    
    def test_user_creation(self):
        self.assertEqual(Users.objects.count(), 100)

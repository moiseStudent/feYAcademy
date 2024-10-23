# populate_users.py
from faker import Faker
from users.models import Users
import random

def populate_users(num_users=100):
    fake = Faker()
    user_type_list = ["student", "teacher", "administrator"]

    for i in range(num_users):
        Users.objects.create(
            name=fake.name(),
            surname=fake.last_name(),
            email=fake.email(),
            password=fake.password(),
            ci=random.randint(11222333, 22333444),
            user_type=random.choice(user_type_list)
        ).save()

if __name__ == "__main__":
    populate_users(100) 


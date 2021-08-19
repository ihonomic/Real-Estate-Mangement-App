from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

# from django.contrib.auth import get_user_model
# User = get_user_model()

from users.models import CustomUser


class SignUpView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        first_name = data["first_name"]
        last_name = data["last_name"]
        email = data["email"]
        password = data["password"]
        password2 = data["password2"]

        if password == password2:
            if CustomUser.objects.filter(email=email).exists():
                return Response({"error": "User email already exist "})

            else:
                if len(password) < 6:
                    return Response({"error": "password must be more than 6 characters"})
                else:
                    user = CustomUser.objects.create_user(
                        email=email, password=password, first_name=first_name, last_name=last_name)
                    user.save()
                    return Response({"success": "Account created successfully"})
        else:
            return Response({"error": "Passwords do not match"})

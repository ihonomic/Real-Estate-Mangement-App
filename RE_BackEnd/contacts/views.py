from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail, EmailMessage
from rest_framework.response import Response

from django.conf import settings


class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        sender = data['name']
        sender_email = data['email']
        subject = data['subject']
        message = data['message']
        from_email = settings.EMAIL_HOST_USER

        email = EmailMessage(
            'Hello',
            'Body goes here',
            settings.EMAIL_HOST_USER,
            ['ihonihon@yahoo.com'],
        )
        email.fail_silently = False
        email.send()
        return Response({"success": "Message sent successfully"})
        # send_mail(subject, message, from_email, [
        #     'ihonfacebook@yahoo.com'], fail_silently=False)

        # contact = Contact.objects.create(name=data['name'], email=data['email'],
        #                                  subject=data['subject'], message=data['message'])
        # contact.save()
        try:
            send_mail(subject, message, sender_email, [
                'onosetaleoseghale@gmail.com'], fail_silently=False)

            contact = Contact.objects.create(name=data['name'], email=data['email'],
                                             subject=data['subject'], message=data['message'])
            contact.save()
            return Response({"success": "Message sent successfully"})
        except:
            return Response({"error": "Message failed to send"})

        # try:
            #     send_mail(
            #         data['subject'],
            #         'Name: '
            #         + data['name']
            #         + '\nEmail: '
            #         + data['email']
            #         + '\n\nMessage:\n'
            #         + data['message'],
            #         'onosetaleoseghale@gmail.com',
            #         ['onosetaleoseghale@gmail.com'],
            #         fail_silently=False
            #     )

            #     contact = Contact.objects.create(name=data['name'], email=data['email'],
            #                                      subject=data['subject'], message=data['message'])
            #     contact.save()

            #     return Response({"success": "Message sent successfully"})

            # except:
            #     return Response({"error": "Message failed to send"})

from django.contrib import admin
from .models import Realtor

# Register your models here.


class RealtorAdmin(admin.ModelAdmin):
    list_display = ("id", "full_name", "email", "date_hired")
    list_display_links = ("id", "full_name")
    search_fields = ("full_name", )
    list_per_page = 25


admin.site.register(Realtor, RealtorAdmin)


# @admin.register(Realtor)
# class RealtorAdmin(admin.ModelAdmin):
#     prepopulated_fields = {'slug': ('get_full_name', ), }

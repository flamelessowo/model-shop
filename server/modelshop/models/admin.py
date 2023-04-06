from models.models import Model
from django.contrib import admin

admin.site.site_title = 'Oleksanr Tymko\'s administration'
admin.site.site_header = 'Oleksanr Tymko\'s Administration'

admin.site.register(Model)

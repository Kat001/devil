from django.contrib import admin
from django.urls import path,include

#For Auto-Generating API documentation
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('v1/', include("api.urls")),

    #For Auto-Generating API documentation
    path('api-docs/', include_docs_urls(title='API Documentation')),
]

from django.contrib import admin
from horilla_views.models import (
    ToggleColumn,
    ActiveTab,
    ActiveGroup,
)

admin.site.register([ToggleColumn, ActiveTab, ActiveGroup])

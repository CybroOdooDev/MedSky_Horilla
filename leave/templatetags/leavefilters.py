from django.template.defaultfilters import register
from django import template

from leave.models import LeaveGeneralSetting

register = template.Library()

@register.filter(name="is_compensatory")
def is_compensatory(user):
    if LeaveGeneralSetting.objects.exists():
        return LeaveGeneralSetting.objects.first().compensatory_leave
    else:
        return False

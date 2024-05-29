from distutils.core import setup

setup(name='${{ values.component_id }}',
      version='1.0',
      description='${{ values.description }}',
      author='${{ values.authorEmail }}',
      {% if values.authorEmail %}
      author_email='${{ values.authorEmail }}',.
      {% endif %}
      packages=['${{ values.component_id }}'],
    )
---
title: Stores
layout: default
permalink: /internal/stores
---

<div class="container mt-5">
  <ul class="nav nav-tabs" id="teamsTabs" role="tablist">
    {% for team in site.data.teams %}
      <li class="nav-item">
        <a class="nav-link {% if forloop.first %}active{% endif %}" id="{{ team[1].name | slugify }}-tab" data-toggle="tab" href="#{{ team[1].name | slugify }}" role="tab" aria-controls="{{ team[1].name | slugify }}" aria-selected="true">{{ team[1].name }}</a>
      </li>
    {% endfor %}
  </ul>

  <div class="tab-content" id="teamsTabsContent">
    {% for team in site.data.teams %}
      <div class="tab-pane fade {% if forloop.first %}show active{% endif %}" id="{{ team[1].name | slugify }}" role="tabpanel" aria-labelledby="{{ team[1].name | slugify }}-tab">
        <div class="row">
          {% for store in team[1].stores %}
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <a href="{{ store.pickup_instructions }}" target="_blank" rel="noopener noreferrer">
                  <img src="{{ store.photo_url }}" class="card-img-top" alt="{{ store.name }}">
                </a>
                <div class="card-body">
                  <h5 class="card-title">{{ store.name }}</h5>
                  <p class="card-text"><a href="https://www.google.com/maps/search/?api=1&query={{ store.address }}">{{ store.address }}</a></p>
                </div>
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<script>
  // Add Bootstrap's tab functionality (ensure Bootstrap JS is included)
  $(document).ready(function(){
    $('#teamsTabs').tab();
  });
</script>

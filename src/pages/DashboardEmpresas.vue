<template>
  <div>
    <div class="section section-contact-us text-center">
      <div class="container my-5">
        <kalendar :configuration="calendar_settings" :events="events"/>
      </div>
    </div>
  </div>
</template>
<script>

import {Kalendar} from 'kalendar-vue';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Kalendar
  },
  data (){
    return {
      authorized: null,
      user: {
        username: '',
        password: ''
      },
      events: [
        {
          from: '2020-10-30T18:00:00Z',
          to: '2020-10-30T19:00:00Z',
          data: 'Event 1',
        },
        {
          from: '2020-10-31T19:00:00Z',
          to: '2020-10-31T21:00:00Z',
          data: 'Olive & Friends',
        },
      ],
      calendar_settings: {
        style: 'material_design',
        cell_height: 10 ,
        scrollToNow: true,
        current_day: new Date(),
        read_only: false,
        day_starts_at: 0,
        day_ends_at: 24,
        overlap: true,
        hide_dates: ['2019-10-31'], // Spooky
        hide_days: [6],
        past_event_creation: true
      },
      new_appointment: {
        title: null,
        description: null
      }
    }
  },
  methods: {
    login(){
      if (this.model.username == "" || this.model.password == ""){
        this.authorized = false;
        this.unauthorizedmsj = "The credentials can not be empty :)";
      }
    }
  }
};
</script>
<style></style>
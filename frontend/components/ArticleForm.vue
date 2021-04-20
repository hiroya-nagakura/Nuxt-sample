<template>
  <b-form @submit.prevent='action'>
    <b-form-group
      label='Title:'
    >
      <b-form-input
        placeholder="Enter title"
        v-model='form.title'
        :value='value'
        @input ='updateValue'
        required
      >
      </b-form-input>
    </b-form-group>

    <b-form-group
      label="Target site:"
    >
      <b-form-select
        v-model="form.target_site"
        :options="options"
        @change ='updateValue'
      >
      </b-form-select>
    </b-form-group>

    <b-form-group
      label='Content:'
    >
      <b-form-textarea
        placeholder="Enter content"
        v-model="form.content"
        rows=6
        max-rows=10
        :value='value'
        @input ='updateValue'
        required
      >
      </b-form-textarea>

    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
export default {
  props: ['form', 'action'],
  data() {
    return {
      options: [
        { value: null, text: 'Please select target site' },
        { value: 1, text: 'Chest' },
        { value: 2, text: 'Arms' },
        { value: 3, text: 'Back' },
        { value: 4, text: 'Abs' },
        { value: 5, text: 'Shoulder' },
        { value: 6, text: 'Legs' },
      ]
    }
  },
  methods: {
    updateValue(e) {
      this.$emit("input", this.form);
    }
  }
}
</script>
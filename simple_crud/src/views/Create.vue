<template>
  <div class="row">
    <div class="col-6 mt-4" style="margin: auto">
      <h2>Create New Todo</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Title"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Body"
          />
        </div>
        <button type="submit" class="btn btn-primary">Save Todo</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
</style>
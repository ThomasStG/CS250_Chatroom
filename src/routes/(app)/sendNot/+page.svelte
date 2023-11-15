<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<div>
  <form
    action="?/send"
    method="POST"
    use:enhance={() => {
      return async ({ update }) => {
        update({ reset: false });
      };
    }}
  >
    <input type="text" name="content" id="content" placeholder="Notification" />
    <input type="text" name="id" id="id" placeholder="Id" />
    <input type="text" name="sender" id="sender" placeholder="Sender Name" />
    <button type="submit" class="item">send</button>
  </form>
</div>

<script></script>

<style lang="scss">
    /* Color schemes */
    $default-background: rgb(220, 220, 220);
  
    $default-color: rgb(0, 0, 0);
  
    $inverted-background: rgb(60, 60, 90);
  
    $inverted-color: rgb(255, 255, 255);
  
    /* Light-mode */
    :global(body) {
      background-color: $default-background;
      color: $default-color;
  
      :global(button) {
        color: $default-color;
      }

      :global(header) {
        border-right-color: $default-color;
      }
  
      /* Light-default */
      :global(.default) {
        background-color: $default-background;
        color: $default-color;
      }
  
      :global(.default-background) {
        background-color: $default-background;
      }
  
      :global(.default-color) {
        color: $default-color;
      }
  
      /* Light-inverted */
      :global(.inverted) {
        background-color: $inverted-background;
        color: $inverted-color;
      }
  
      :global(.inverted-background) {
        background-color: $inverted-background;
      }
  
      :global(.inverted-color) {
        color: $inverted-color;
      }
    }
  
    /* Dark-mode */
    :global(body.dark) {
      background-color: $inverted-background;
      color: $inverted-color;
  
      :global(button) {
        color: $inverted-color;
      }

      :global(header) {
        border-right-color: $inverted-color;
      }
  
      /* Dark-default */
      :global(.default) {
        background-color: $inverted-background;
        color: $inverted-color;
      }
  
      :global(.default-background) {
        background-color: $inverted-background;
      }
  
      :global(.default-color) {
        color: $inverted-color;
      }
  
      /* Dark-inverted */
      :global(.inverted) {
        background-color: $default-background;
        color: $default-color;
      }
  
      :global(.inverted-background) {
        background-color: $default-background;
      }
  
      :global(.inverted-color) {
        color: $default-color;
      }
    }
  </style>
  
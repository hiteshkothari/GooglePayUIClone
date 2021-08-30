<script>
  import List from "../../component/List/List.svelte";
  import Navbar from "../../component/navbar.svelte";
  let list = [
    { icon: "question", text: "Get Help" },
    { icon: "Note", text: "Send feedback" },
    { icon: "page", text: "Terms of service" },
    { icon: "security", text: "Privacy ppolicy" },
    { icon: "mobile scroll", text: "Software licenses" },
    { icon: "Info", text: "Version 129.1.5 (arm64-v9a_release_flutter)" },
  ];
</script>

<Navbar title="Help & feedback" />
<List {list} />

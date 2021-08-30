<script>
  import Divider from "../../component/List/divider.svelte";
  import List from "../../component/List/List.svelte";
  import Navbar from "../../component/navbar.svelte";

  let list = [
    { icon: "user", text: "Personal Info" },
    { icon: "bell", text: "Notifications & emails" },
    { icon: "sheild", text: "Privacy & Security" },
    { icon: "note", text: "Raise BBPS dispute" },
  ];
  let list1 = [
    { icon: "question", text: "Help & feedback" },
    { icon: "lock", text: "Lock app" },
    { icon: "logout", text: "Sign out" },
  ];
</script>

<Navbar title="Settings" />
<List {list} />
<Divider />
<List list={list1} />

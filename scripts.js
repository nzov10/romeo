<script>
    function toggleIssue(issueId) {
        var issueText = document.getElementById(issueId);
        if (issueText.style.display === "none") {
            issueText.style.display = "block";
        } else {
            issueText.style.display = "none";
        }
    }
</script>

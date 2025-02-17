function showModal(plan) {
    let text = "";
    if (plan === "silver") {
        text = "Silver Plan Referral Commission: $50";
    }
    document.getElementById("modal-text").innerText = text;
    document.getElementById("modal").style.display = "block";
}

function hideModal() {
    document.getElementById("modal").style.display = "none";
}

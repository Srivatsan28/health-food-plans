function checkout(plan) {
    // Redirect to the appropriate checkout URL based on the plan
    alert(`Redirecting to checkout for the ${plan} plan.`);
    if (plan === "Basic") {
        window.location.href = "https://your-chargebee-checkout-link-basic";
    } else if (plan === "Advantage") {
        window.location.href = "https://your-chargebee-checkout-link-advantage";
    } else if (plan === "Amaze") {
        window.location.href = "https://your-chargebee-checkout-link-amaze";
    }
}


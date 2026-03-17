// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Tracking Function
function trackOrder() {
    const input = document.getElementById('trackingInput');
    const result = document.getElementById('trackingResult');
    const trackingNumber = input.value.trim();
    
    if (!trackingNumber) {
        showTrackingResult('Please enter a tracking number', 'error');
        return;
    }
    
    showTrackingResult('Looking up your order...', 'loading');
    
    setTimeout(() => {
        const mockStatuses = [
            { status: 'Out for Delivery', location: 'Local Distribution Center', time: '10:30 AM' },
            { status: 'In Transit', location: 'Regional Hub', time: 'Yesterday, 8:45 PM' },
            { status: 'Picked Up', location: 'Merchant Location', time: 'Yesterday, 2:00 PM' }
        ];
        
        const randomStatus = mockStatuses[Math.floor(Math.random() * mockStatuses.length)];
        
        const html = `
            <div class="tracking-info">
                <h4>Order #${trackingNumber}</h4>
                <div class="tracking-status">
                    <div class="status-dot"></div>
                    <div>
                        <strong>${randomStatus.status}</strong>
                        <div style="color: #666; font-size: 0.9rem;">
                            ${randomStatus.location} • ${randomStatus.time}
                        </div>
                    </div>
                </div>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                    <small style="color: #22c55e;">✓ Estimated delivery: Today by 6:00 PM</small>
                </div>
            </div>
        `;
        
        showTrackingResult(html, 'success');
    }, 1500);
}

function showTrackingResult(content, type) {
    const result = document.getElementById('trackingResult');
    result.innerHTML = content;
    result.classList.add('show');
    
    if (type === 'error') {
        result.style.borderLeftColor = '#ef4444';
    } else if (type === 'success') {
        result.style.borderLeftColor = '#22c55e';
    } else {
        result.style.borderLeftColor = '#3b82f6';
    }
}

document.getElementById('trackingInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        trackOrder();
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

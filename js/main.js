// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    });
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
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Sticky CTA visibility
const stickyCta = document.getElementById('stickyCta');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        stickyCta.classList.add('show');
    } else {
        stickyCta.classList.remove('show');
    }
});

// Tracking System with Mock Data
const mockDatabase = {
    'STD-123456': {
        status: 'Out for Delivery',
        location: 'Heidelberg Distribution Center',
        time: '10:30 AM',
        estimatedDelivery: 'Today by 2:00 PM',
        history: [
            { time: '08:00 AM', event: 'Package picked up from sender' },
            { time: '09:30 AM', event: 'Arrived at sorting facility' },
            { time: '10:30 AM', event: 'Out for delivery' }
        ]
    },
    'STD-789012': {
        status: 'In Transit',
        location: 'Johannesburg Hub',
        time: 'Yesterday, 8:45 PM',
        estimatedDelivery: 'Tomorrow by 12:00 PM',
        history: [
            { time: 'Yesterday, 2:00 PM', event: 'Package picked up' },
            { time: 'Yesterday, 8:45 PM', event: 'In transit to next facility' }
        ]
    },
    'STD-345678': {
        status: 'Delivered',
        location: 'Customer Address',
        time: 'Today, 9:15 AM',
        estimatedDelivery: 'Delivered',
        history: [
            { time: 'Yesterday, 4:00 PM', event: 'Package picked up' },
            { time: 'Yesterday, 9:30 PM', event: 'Arrived at local facility' },
            { time: 'Today, 8:00 AM', event: 'Out for delivery' },
            { time: 'Today, 9:15 AM', event: 'Delivered - Signed by customer' }
        ]
    }
};

function trackOrder() {
    const input = document.getElementById('trackingInput');
    const result = document.getElementById('trackingResult');
    const trackBtn = document.getElementById('trackBtn');
    const trackingNumber = input.value.trim().toUpperCase();
    
    if (!trackingNumber) {
        showError('Please enter a tracking number');
        return;
    }
    
    if (!trackingNumber.startsWith('STD-')) {
        showError('Invalid format. Use format: STD-123456');
        return;
    }
    
    // Show loading state
    trackBtn.disabled = true;
    trackBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    result.style.display = 'none';
    
    // Simulate API call
    setTimeout(() => {
        trackBtn.disabled = false;
        trackBtn.innerHTML = '<span class="btn-text">Track Now</span><i class="fas fa-arrow-right"></i>';
        
        const order = mockDatabase[trackingNumber];
        
        if (order) {
            showTrackingResult(order, trackingNumber);
        } else {
            // Generate random result for demo
            const randomStatuses = ['Out for Delivery', 'In Transit', 'Picked Up'];
            const randomLocations = ['Local Distribution Center', 'Regional Hub', 'Sorting Facility'];
            const randomStatus = randomStatuses[Math.floor(Math.random() * randomStatuses.length)];
            const randomLocation = randomLocations[Math.floor(Math.random() * randomLocations.length)];
            
            const mockOrder = {
                status: randomStatus,
                location: randomLocation,
                time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
                estimatedDelivery: 'Today by 6:00 PM',
                history: [
                    { time: '08:00 AM', event: 'Order received' },
                    { time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), event: randomStatus }
                ]
            };
            
            showTrackingResult(mockOrder, trackingNumber);
        }
    }, 1500);
}

function showTrackingResult(order, trackingNumber) {
    const result = document.getElementById('trackingResult');
    
    const statusColors = {
        'Delivered': '#22c55e',
        'Out for Delivery': '#3b82f6',
        'In Transit': '#f59e0b',
        'Picked Up': '#8b5cf6'
    };
    
    const statusColor = statusColors[order.status] || '#22c55e';
    
    const historyHtml = order.history.map(h => `
        <div class="history-item" style="display: flex; gap: 1rem; margin-bottom: 0.75rem; font-size: 0.9rem;">
            <span style="color: #6b7280; min-width: 80px;">${h.time}</span>
            <span style="color: #374151;">${h.event}</span>
        </div>
    `).join('');
    
    result.innerHTML = `
        <div class="tracking-status">
            <div class="status-icon" style="background: ${statusColor}20; color: ${statusColor};">
                <i class="fas fa-${order.status === 'Delivered' ? 'check' : 'truck'}"></i>
            </div>
            <div class="status-details">
                <h4>Order #${trackingNumber}</h4>
                <p style="font-size: 1.1rem; font-weight: 600; color: ${statusColor}; margin-bottom: 0.5rem;">
                    ${order.status}
                </p>
                <p><i class="fas fa-location-dot" style="color: #9ca3af; margin-right: 0.5rem;"></i>${order.location}</p>
                <p class="status-time" style="margin-top: 0.5rem;">
                    <i class="fas fa-clock" style="margin-right: 0.5rem;"></i>Last update: ${order.time}
                </p>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                    <p style="color: #22c55e; font-weight: 600;">
                        <i class="fas fa-calendar-check" style="margin-right: 0.5rem;"></i>
                        Est. delivery: ${order.estimatedDelivery}
                    </p>
                </div>
            </div>
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb;">
            <h5 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; margin-bottom: 1rem;">Tracking History</h5>
            ${historyHtml}
        </div>
    `;
    
    result.style.display = 'block';
    result.style.borderLeftColor = statusColor;
    result.classList.add('show');
}

function showError(message) {
    const result = document.getElementById('trackingResult');
    result.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; color: #ef4444;">
            <i class="fas fa-circle-exclamation" style="font-size: 1.5rem;"></i>
            <span style="font-weight: 600;">${message}</span>
        </div>
    `;
    result.style.display = 'block';
    result.style.borderLeftColor = '#ef4444';
    result.classList.add('show');
}

// Allow Enter key to submit tracking
document.getElementById('trackingInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        trackOrder();
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.step, .service-card, .testimonial-card, .area-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Презентация мобильного дизайна - JavaScript
class MobileDesignPresentation {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.querySelector('.progress-bar');
        this.slideCounter = document.querySelector('.slide-counter');
        
        this.init();
    }
    
    init() {
        this.updateSlideCounter();
        this.updateProgressBar();
        this.updateButtonStates();
        this.bindEvents();
        this.addKeyboardNavigation();
        this.addTouchNavigation();
        this.startAutoProgress();
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
    }
    
    addKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides);
                    break;
            }
        });
    }
    
    addTouchNavigation() {
        let startX = 0;
        let startY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Проверяем, что это горизонтальный свайп
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide(); // Свайп влево - следующий слайд
                } else {
                    this.previousSlide(); // Свайп вправо - предыдущий слайд
                }
            }
            
            startX = 0;
            startY = 0;
        });
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;
        
        // Убираем активный класс у текущего слайда
        this.slides[this.currentSlide - 1].classList.remove('active');
        
        // Устанавливаем новый текущий слайд
        this.currentSlide = slideNumber;
        
        // Добавляем активный класс новому слайду
        this.slides[this.currentSlide - 1].classList.add('active');
        
        // Обновляем UI
        this.updateSlideCounter();
        this.updateProgressBar();
        this.updateButtonStates();
        
        // Запускаем специальные анимации для слайдов
        this.triggerSlideAnimations();
    }
    
    updateSlideCounter() {
        this.slideCounter.textContent = `${this.currentSlide} / ${this.totalSlides}`;
    }
    
    updateProgressBar() {
        const progress = (this.currentSlide / this.totalSlides) * 100;
        this.progressBar.style.width = `${progress}%`;
    }
    
    updateButtonStates() {
        this.prevBtn.disabled = this.currentSlide === 1;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides;
    }
    
    triggerSlideAnimations() {
        const currentSlideElement = this.slides[this.currentSlide - 1];
        
        // Анимации для разных типов слайдов
        switch(this.currentSlide) {
            case 1:
                this.animateHeroSlide(currentSlideElement);
                break;
            case 2:
                this.animateGoalsSlide(currentSlideElement);
                break;
            case 5:
                this.animatePrinciplesSlide(currentSlideElement);
                break;
        }
    }
    
    animateHeroSlide(slide) {
        const stats = slide.querySelectorAll('.stat-item');
        stats.forEach((stat, index) => {
            stat.style.animation = 'none';
            stat.offsetHeight; // Trigger reflow
            stat.style.animation = `slideIn 0.6s ease-out ${index * 0.2}s forwards`;
        });
        
        // Анимация мокапа устройства
        const deviceMockup = slide.querySelector('.device-mockup');
        if (deviceMockup) {
            deviceMockup.style.transform = 'translateY(20px) scale(0.9)';
            deviceMockup.style.opacity = '0';
            
            setTimeout(() => {
                deviceMockup.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                deviceMockup.style.transform = 'translateY(0) scale(1)';
                deviceMockup.style.opacity = '1';
            }, 200);
        }
    }
    
    animateGoalsSlide(slide) {
        const goalCards = slide.querySelectorAll('.goal-card');
        goalCards.forEach((card, index) => {
            card.style.transform = 'translateY(30px)';
            card.style.opacity = '0';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.transform = 'translateY(0)';
                card.style.opacity = '1';
            }, index * 150);
        });
    }
    
    animatePrinciplesSlide(slide) {
        const principleCards = slide.querySelectorAll('.principle-card');
        principleCards.forEach((card, index) => {
            card.style.transform = 'scale(0.8) rotate(-5deg)';
            card.style.opacity = '0';
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.transform = 'scale(1) rotate(0deg)';
                card.style.opacity = '1';
            }, index * 200);
        });
        
        // Специальная анимация для touch target
        const touchTarget = slide.querySelector('.touch-target');
        if (touchTarget) {
            setTimeout(() => {
                touchTarget.style.animation = 'pulse 2s infinite';
            }, 1000);
        }
        
        // Анимация загрузки
        const speedFill = slide.querySelector('.speed-fill');
        if (speedFill) {
            setTimeout(() => {
                speedFill.style.animation = 'loading 2s infinite';
            }, 1500);
        }
    }
    
    startAutoProgress() {
        // Автоматический прогресс для демонстрации (отключается при взаимодействии)
        let autoProgressTimer;
        let hasInteracted = false;
        
        const startAutoProgress = () => {
            if (hasInteracted) return;
            
            autoProgressTimer = setTimeout(() => {
                if (this.currentSlide < this.totalSlides && !hasInteracted) {
                    this.nextSlide();
                    startAutoProgress();
                }
            }, 10000); // 10 секунд на слайд
        };
        
        const stopAutoProgress = () => {
            hasInteracted = true;
            clearTimeout(autoProgressTimer);
        };
        
        // Останавливаем автопрогресс при любом взаимодействии
        document.addEventListener('click', stopAutoProgress, { once: true });
        document.addEventListener('keydown', stopAutoProgress, { once: true });
        document.addEventListener('touchstart', stopAutoProgress, { once: true });
        
        // Запускаем автопрогресс
        setTimeout(startAutoProgress, 5000); // Начинаем через 5 секунд
    }
}

// Дополнительные интерактивные элементы
class InteractiveElements {
    constructor() {
        this.init();
    }
    
    init() {
        this.addHoverEffects();
        this.addClickEffects();
        this.addScrollEffects();
        this.addDeviceAnimation();
    }
    
    addHoverEffects() {
        // Эффекты при наведении на карточки
        const cards = document.querySelectorAll('.goal-card, .principle-card, .framework-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Эффекты для кнопок навигации
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                if (!btn.disabled) {
                    btn.style.transform = 'scale(1.1)';
                    btn.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4)';
                }
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
                btn.style.boxShadow = 'none';
            });
        });
    }
    
    addClickEffects() {
        // Эффект ряби при клике
        const clickableElements = document.querySelectorAll('.nav-btn, .goal-card, .principle-card');
        
        clickableElements.forEach(element => {
            element.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = element.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: ripple 0.6s linear;
                `;
                
                element.style.position = 'relative';
                element.style.overflow = 'hidden';
                element.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // CSS для анимации ряби
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    addScrollEffects() {
        // Параллакс эффект для героического слайда
        const heroSlide = document.querySelector('.hero-slide');
        if (heroSlide) {
            document.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;
                
                heroSlide.style.backgroundPosition = `${x}% ${y}%`;
            });
        }
    }
    
    addDeviceAnimation() {
        // Анимация интерфейса в мокапе устройства
        const contentBlocks = document.querySelectorAll('.content-block');
        const navItems = document.querySelectorAll('.nav-item');
        
        setInterval(() => {
            // Случайная анимация блоков контента
            contentBlocks.forEach(block => {
                if (Math.random() > 0.7) {
                    block.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        block.style.transform = 'scale(1)';
                    }, 200);
                }
            });
        }, 3000);
        
        // Переключение активного элемента навигации
        let activeNavIndex = 0;
        setInterval(() => {
            navItems.forEach(item => item.classList.remove('active'));
            navItems[activeNavIndex].classList.add('active');
            activeNavIndex = (activeNavIndex + 1) % navItems.length;
        }, 2000);
    }
}

// Утилиты для мобильного UX
class MobileUXUtils {
    constructor() {
        this.init();
    }
    
    init() {
        this.addViewportMetaOptimization();
        this.addTouchOptimization();
        this.addPerformanceOptimization();
        this.addAccessibilityFeatures();
    }
    
    addViewportMetaOptimization() {
        // Проверяем и оптимизируем viewport meta tag
        let viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            document.head.appendChild(viewportMeta);
        }
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    }
    
    addTouchOptimization() {
        // Улучшение производительности touch событий
        let isScrolling = false;
        
        document.addEventListener('touchstart', () => {
            isScrolling = false;
        }, { passive: true });
        
        document.addEventListener('touchmove', () => {
            isScrolling = true;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            if (!isScrolling) {
                // Это тап, не скролл
                e.target.classList.add('touch-feedback');
                setTimeout(() => {
                    e.target.classList.remove('touch-feedback');
                }, 150);
            }
        }, { passive: true });
        
        // CSS для обратной связи при касании
        const touchStyle = document.createElement('style');
        touchStyle.textContent = `
            .touch-feedback {
                background-color: rgba(99, 102, 241, 0.1) !important;
                transition: background-color 0.15s ease !important;
            }
        `;
        document.head.appendChild(touchStyle);
    }
    
    addPerformanceOptimization() {
        // Ленивая загрузка изображений
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // Предзагрузка следующего слайда
        const preloadNextSlide = () => {
            const nextSlide = document.querySelector(`.slide[data-slide="${presentation.currentSlide + 1}"]`);
            if (nextSlide) {
                const images = nextSlide.querySelectorAll('img[data-src]');
                images.forEach(img => {
                    img.src = img.dataset.src;
                });
            }
        };
        
        // Вызываем предзагрузку при смене слайда
        document.addEventListener('slideChange', preloadNextSlide);
    }
    
    addAccessibilityFeatures() {
        // Поддержка скринридеров
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.setAttribute('role', 'tabpanel');
            slide.setAttribute('aria-label', `Слайд ${index + 1} из ${slides.length}`);
        });
        
        // Фокус-менеджмент
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const activeSlide = document.querySelector('.slide.active');
                const focusableElements = activeSlide.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                
                if (focusableElements.length === 0) {
                    e.preventDefault();
                }
            }
        });
        
        // Announce slide changes to screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(announcer);
        
        // Обновляем announcer при смене слайда
        const updateAnnouncer = () => {
            const slideTitle = document.querySelector('.slide.active .slide-title')?.textContent;
            if (slideTitle) {
                announcer.textContent = `Слайд ${presentation.currentSlide}: ${slideTitle}`;
            }
        };
        
        document.addEventListener('slideChange', updateAnnouncer);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Создаем экземпляры классов
    const presentation = new MobileDesignPresentation();
    const interactiveElements = new InteractiveElements();
    const mobileUXUtils = new MobileUXUtils();
    
    // Делаем презентацию доступной глобально для отладки
    window.presentation = presentation;
    
    // Показываем индикатор загрузки
    const loadingIndicator = document.createElement('div');
    loadingIndicator.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(5px);
        ">
            <div style="text-align: center;">
                <div style="
                    width: 50px;
                    height: 50px;
                    border: 3px solid #e5e7eb;
                    border-top: 3px solid #6366f1;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                "></div>
                <p style="color: #6b7280; font-weight: 500;">Загружаем презентацию...</p>
            </div>
        </div>
    `;
    
    // CSS для анимации загрузки
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    document.body.appendChild(loadingIndicator);
    
    // Убираем индикатор загрузки через 2 секунды
    setTimeout(() => {
        loadingIndicator.style.opacity = '0';
        loadingIndicator.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loadingIndicator.remove();
        }, 500);
    }, 2000);
    
    // Добавляем событие для отслеживания смены слайдов
    const originalGoToSlide = presentation.goToSlide.bind(presentation);
    presentation.goToSlide = function(slideNumber) {
        originalGoToSlide(slideNumber);
        document.dispatchEvent(new CustomEvent('slideChange', { detail: { slideNumber } }));
    };
    
    console.log('🎉 Презентация "Мобильный и адаптивный дизайн" загружена!');
    console.log('📱 Используйте стрелки, пробел или свайпы для навигации');
    console.log('⌨️ Горячие клавиши: Home - первый слайд, End - последний слайд');
});

// Обработка ошибок
window.addEventListener('error', (e) => {
    console.error('Ошибка в презентации:', e.error);
});

// Обработка изменения ориентации устройства
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Перерасчет размеров после поворота
        window.dispatchEvent(new Event('resize'));
    }, 100);
}); 
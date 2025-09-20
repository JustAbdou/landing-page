import React from 'react';
import Container from '../components/Container';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-background">
            <section className="pt-24 pb-16">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                            Privacy Policy
                        </h1>

                        <div className="prose prose-gray max-w-none">

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        1. Information We Collect
                                    </h2>
                                    <p className="text-foreground/80 leading-relaxed">
                                        ChefFlow collects information you provide directly to us, such as when you
                                        create an account, use our services, or contact us for support. This may
                                        include your name, email address, phone number, and restaurant information.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        2. How We Use Your Information
                                    </h2>
                                    <p className="text-foreground/80 leading-relaxed">
                                        We use the information we collect to provide, maintain, and improve our
                                        services, process transactions, send you technical notices and support
                                        messages, and communicate with you about our services.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        3. Information Sharing and Disclosure
                                    </h2>
                                    <p className="text-foreground/80 leading-relaxed">
                                        We do not sell, trade, or otherwise transfer your personal information
                                        to third parties without your consent, except as described in this policy.
                                        We may share information in response to legal requests or to protect our
                                        rights and the safety of others.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        4. Data Security
                                    </h2>
                                    <p className="text-foreground/80 leading-relaxed">
                                        We implement appropriate technical and organizational measures to protect
                                        your personal information against unauthorized access, alteration,
                                        disclosure, or destruction.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        5. Your Rights and Choices
                                    </h2>
                                    <p className="text-foreground/80 leading-relaxed">
                                        You have the right to access, update, or delete your personal information.
                                        You may also opt out of certain communications from us. To exercise these
                                        rights, please contact us at contact@chefflowapp.net.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        6. Cookies and Tracking Technologies
                                    </h2>
                                    <p className="text-foreground/80 leading-relaxed">
                                        We do not use cookies or similar technologies to track your activity on this website.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        7. Changes to This Privacy Policy
                                    </h2>
                                    <p className="text-foreground/80 leading-relaxed">
                                        We may update this privacy policy from time to time. We will notify you
                                        of any changes by posting the new privacy policy.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                                        8. Contact Us
                                    </h2>
                                    <p className="text-foreground/80 leading-relaxed">
                                        If you have any questions about this privacy policy or our privacy
                                        practices, please contact us at:
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default PrivacyPolicy;

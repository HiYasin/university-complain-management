import React from 'react'

export default function Footer() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
            <div className="bg-muted py-8 mt-12 rounded-lg">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
                    <div>
                        <h3 className="font-bold text-lg mb-2">IIUC CMS</h3>
                        <p className="text-muted-foreground">
                            Secure, transparent and effective complaint management for IIUC students.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Quick Links</h4>
                        <ul className="space-y-1 text-muted-foreground">
                            <li>Home</li>
                            <li>Submit Complaint</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Support</h4>
                        <ul className="space-y-1 text-muted-foreground">
                            <li>Contact Us</li>
                            <li>Help Desk</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Follow Us</h4>
                        <ul className="space-y-1 text-muted-foreground">
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-muted-foreground mt-6 border-t pt-4">
                    © {new Date().getFullYear()} IIUC Complaint Management System. All rights reserved.
                </div>
            </div>

        </div>

    )
}

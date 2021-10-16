export default function FloatingShapes() {
    return (
            <div className="shapes overflow-visible h-screen max-w-7xl absolute inset-x-2/4 inset-y-full">
                <svg width="50" height="50" className="absolute inset-y-12">
                    <rect fillOpacity="0" stroke="#FF69F8" strokeWidth="2" width="12" height="12"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-12 left-32">
                    <rect fillOpacity="0" stroke="#FF69F8" strokeWidth="2" width="12" height="12"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-40 left-32">
                    <circle fill="none" stroke="#FF6666" strokeWidth="2" cx="7.5" cy="7.5" r="6.25" width="50" height="50"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-64 right-32">
                    <g>
                        <line fill="none" stroke="#7CB2E8" strokeWidth="2" x1="1" y1="1" x2="14" y2="14"/>
                        <line fill="none" stroke="#7CB2E8" strokeWidth="2" x1="14" y1="1" x2="1" y2="14"/>
                    </g>
                </svg>
                <svg width="50" height="50" className="absolute right-full">
                    <g>
                        <line fill="none" stroke="#7CB2E8" strokeWidth="2" x1="1" y1="1" x2="14" y2="14"/>
                        <line fill="none" stroke="#7CB2E8" strokeWidth="2" x1="14" y1="1" x2="1" y2="14"/>
                    </g>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-96 right-64">
                    <path fill="#40E2A0" d="M15.998,14.727L7.504,0.204l-8.486,14.521L15.998,14.727z M7.48,4.057l4.889,8.569H2.637L7.48,4.057z"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-96 left-96">
                    <path fill="#40E2A0" d="M15.998,14.727L7.504,0.204l-8.486,14.521L15.998,14.727z M7.48,4.057l4.889,8.569H2.637L7.48,4.057z"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-64 right-full">
                    <g>
                        <line fill="none" stroke="#7CB2E8" strokeWidth="2" x1="1" y1="1" x2="14" y2="14"/>
                        <line fill="none" stroke="#7CB2E8" strokeWidth="2" x1="14" y1="1" x2="1" y2="14"/>
                    </g>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-96 left-3/4">
                    <rect fillOpacity="0" stroke="#FF69F8" strokeWidth="2" width="12" height="12"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-96 right-3/4">
                    <circle fill="none" stroke="#FF6666" strokeWidth="2" cx="7.5" cy="7.5" r="6.25" width="50" height="50"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-64 left-2/4">
                    <path fill="#40E2A0" d="M15.998,14.727L7.504,0.204l-8.486,14.521L15.998,14.727z M7.48,4.057l4.889,8.569H2.637L7.48,4.057z"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-3/4 right-32">
                    <g>
                        <line fill="none" stroke="#7CB2E8" strokeWidth="2" x1="1" y1="1" x2="14" y2="14"/>
                        <line fill="none" stroke="#7CB2E8" strokeWidth="2" x1="14" y1="1" x2="1" y2="14"/>
                    </g>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-2/4 right-32">
                    <circle fill="none" stroke="#FF6666" strokeWidth="2" cx="7.5" cy="7.5" r="6.25" width="50" height="50"/>
                </svg>
                <svg width="50" height="50" className="absolute inset-y-3/4 left-96">
                    <path fill="#40E2A0" d="M15.998,14.727L7.504,0.204l-8.486,14.521L15.998,14.727z M7.48,4.057l4.889,8.569H2.637L7.48,4.057z"/>
                </svg>
            </div>
    );
}

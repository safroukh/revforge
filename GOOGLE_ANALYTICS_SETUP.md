# Google Analytics 4 Setup Guide

## Overview

RevForge is configured with Google Analytics 4 (GA4) tracking for conversion optimization and user behavior analysis.

## Configuration Steps

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select an existing one
3. Navigate to **Admin > Data Streams**
4. Select your web stream
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Update the Hook

Open `/client/src/hooks/useAnalytics.ts` and replace the placeholder:

```typescript
const GA_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID
```

With your actual Measurement ID:

```typescript
const GA_ID = 'G-ABC123DEF456'; // Example
```

### 3. Tracked Events

The implementation tracks the following events automatically:

#### Page Views
- Automatically tracked on page load
- Includes page path and title

#### CTA Clicks
- **Event**: `cta_click`
- **Tracked on**: Hero section buttons, Final CTA buttons, Blog preview buttons
- **Parameters**: `button_name`, `location`

#### Form Submissions
- **Event**: `form_submit`
- **Tracked on**: Contact form submission
- **Parameters**: `form_name`, `company`, `arr`, `language`

#### Conversions
- **Event**: `conversion`
- **Tracked on**: Lead capture (form submission)
- **Parameters**: `conversion_type`, `conversion_value`

#### Link Clicks
- **Event**: `link_click`
- **Parameters**: `link_name`, `link_url`

#### Blog Article Views
- **Event**: `blog_view`
- **Parameters**: `article_title`, `article_slug`

#### Scroll Depth
- **Event**: `scroll_depth`
- **Parameters**: `depth_percentage`

## Usage in Components

### Track CTA Clicks

```typescript
import { useAnalytics } from "@/hooks/useAnalytics";

export default function MyComponent() {
  const { trackCTAClick } = useAnalytics();

  return (
    <button onClick={() => trackCTAClick('my_button', 'my_section')}>
      Click me
    </button>
  );
}
```

### Track Form Submissions

```typescript
import { useAnalytics } from "@/hooks/useAnalytics";

export default function MyForm() {
  const { trackFormSubmission, trackConversion } = useAnalytics();

  const handleSubmit = async () => {
    // Your form submission logic
    
    trackFormSubmission('my_form', {
      field1: 'value1',
      field2: 'value2',
    });

    trackConversion('my_conversion_type', 100); // Optional value
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

## Verify Setup

1. After deploying with your GA4 ID:
2. Go to Google Analytics > Real-time
3. Open your website in a browser
4. You should see real-time activity in GA4

## Important Notes

- Replace `G-XXXXXXXXXX` with your actual Measurement ID before deployment
- The hook initializes GA4 automatically when the app loads
- All events are sent to Google Analytics in real-time
- You can view reports in GA4 dashboard under **Reports > Engagement**

## Troubleshooting

### Events not appearing in GA4?

1. Verify your Measurement ID is correct
2. Check browser console for errors
3. Ensure you've waited at least 24 hours for GA4 to process data
4. Use [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) extension to verify events

### Custom Events not tracked?

- Ensure you're calling the tracking functions from components that use `useAnalytics()`
- Check that the hook is properly imported and used

## Next Steps

1. Set up conversion goals in GA4
2. Create custom dashboards for key metrics
3. Set up alerts for important events
4. Integrate with Google Search Console for SEO insights

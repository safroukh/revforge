import { useTranslation } from '@/hooks/useTranslation';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/**
 * Payment Metrics Chart Component
 * Displays interactive Recharts visualizations for payment optimization metrics
 * - Failed Payment Recovery Rate (Line Chart)
 * - Payment Retry Success Rate (Bar Chart)
 * - Payment Status Distribution (Pie Chart)
 * - Customer LTV Impact (Line Chart)
 */

// Sample data for Failed Payment Recovery
const failedPaymentData = [
  { month: 'Jan', before: 65, after: 88 },
  { month: 'Feb', before: 68, after: 91 },
  { month: 'Mar', before: 70, after: 93 },
  { month: 'Apr', before: 72, after: 95 },
  { month: 'May', before: 75, after: 96 },
  { month: 'Jun', before: 78, after: 97 },
];

// Sample data for Retry Success Rate
const retrySuccessData = [
  { strategy: 'Standard', success: 45 },
  { strategy: 'Optimized', success: 78 },
  { strategy: 'AI-Powered', success: 92 },
];

// Sample data for Payment Status Distribution
const paymentStatusData = [
  { name: 'Successful', value: 88, color: '#22C55E' },
  { name: 'Failed', value: 8, color: '#EF4444' },
  { name: 'Pending', value: 4, color: '#F59E0B' },
];

// Sample data for Customer LTV Impact
const ltvData = [
  { month: 'Month 1', ltv: 450 },
  { month: 'Month 2', ltv: 520 },
  { month: 'Month 3', ltv: 620 },
  { month: 'Month 4', ltv: 750 },
  { month: 'Month 5', ltv: 890 },
  { month: 'Month 6', ltv: 1050 },
];

export default function PaymentMetricsChart() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('metrics.title') || 'Real Results. Real Data.'}
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            {t('metrics.subtitle') || 'See how RevForge transforms payment optimization with data-driven insights'}
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Failed Payment Recovery Chart */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t('metrics.failedPaymentRecovery') || 'Failed Payment Recovery Rate'}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={failedPaymentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                <XAxis stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111827',
                    border: '1px solid #1F2937',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="before"
                  stroke="#EF4444"
                  strokeWidth={2}
                  name="Before RevForge"
                  dot={{ fill: '#EF4444', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="after"
                  stroke="#22C55E"
                  strokeWidth={2}
                  name="After RevForge"
                  dot={{ fill: '#22C55E', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Retry Success Rate Chart */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t('metrics.retrySuccessRate') || 'Retry Success Rate Impact'}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={retrySuccessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                <XAxis stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111827',
                    border: '1px solid #1F2937',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                  }}
                />
                <Legend />
                <Bar
                  dataKey="success"
                  fill="#10B981"
                  name="Success Rate (%)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">+33%</div>
            <p className="text-foreground">
              {t('metrics.insight1') || 'Average recovery rate improvement'}
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">+104%</div>
            <p className="text-foreground">
              {t('metrics.insight2') || 'Retry success rate with AI optimization'}
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">+133%</div>
            <p className="text-foreground">
              {t('metrics.insight3') || 'Average customer LTV growth in 6 months'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

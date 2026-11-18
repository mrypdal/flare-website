import { useState, useEffect } from 'react';

const API_URL = 'https://flare-scorer.onrender.com/api/availability';

const APRIL_OPTIONS = [
  {
    value: 1,
    label: '1) I can attend the meeting on 14–15 April and arrive on 13 April.',
  },
  {
    value: 2,
    label: '2) I can attend the meeting on 14–15 April and arrive on 13 April, but only if there are no other alternatives.',
  },
  {
    value: 3,
    label: '3) I cannot attend the meeting on 14–15 April.',
  },
];

const MAY_OPTIONS = [
  {
    value: 1,
    label: '1) I can attend the meeting on 10–11 May and arrive on 9 May.',
  },
  {
    value: 2,
    label: '2) I can attend the meeting on 10–11 May and arrive on 9 May, but only if there are no other alternatives.',
  },
  {
    value: 3,
    label: '3) I cannot attend the meeting on 10–11 May.',
  },
];

interface Props {
  initialApril?: number | null;
  initialMay?: number | null;
  initialName?: string;
  onClose?: () => void;
}

export default function AvailabilityPoll({
  initialApril = null,
  initialMay = null,
  initialName = '',
  onClose,
}: Props) {
  const [name, setName] = useState<string>(initialName || '');
  const [aprilChoice, setAprilChoice] = useState<number | null>(initialApril);
  const [mayChoice, setMayChoice] = useState<number | null>(initialMay);
  const [comments, setComments] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Wake up Render backend immediately on mount
  useEffect(() => {
    fetch(API_URL, { method: 'GET' }).catch(() => {});
  }, []);

  const finalName = name.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!finalName) {
      setError('Please type your name.');
      return;
    }
    if (!aprilChoice || !mayChoice) {
      setError('Please select an option (1, 2, or 3) for both the April and May dates.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: finalName,
          april_choice: aprilChoice,
          may_choice: mayChoice,
          comments,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Could not save response. Please try again.');
      }
    } catch {
      setError('Network error while connecting to server. Please click Submit again in a few seconds.');
    }
    setSubmitting(false);
  };

  const renderOptionBox = (
    opt: { value: number; label: string },
    selectedValue: number | null,
    onSelect: (v: number) => void
  ) => {
    const isSelected = selectedValue === opt.value;
    return (
      <div
        key={opt.value}
        onClick={() => onSelect(opt.value)}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px',
          padding: '16px 18px',
          borderRadius: '12px',
          border: isSelected ? '2px solid #0284c7' : '1.5px solid #cbd5e1',
          backgroundColor: isSelected ? 'rgba(2, 132, 199, 0.08)' : '#ffffff',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          marginBottom: '10px',
          boxShadow: isSelected ? '0 2px 8px rgba(2, 132, 199, 0.14)' : 'none',
        }}
      >
        <div
          style={{
            width: '22px',
            height: '22px',
            minWidth: '22px',
            borderRadius: '50%',
            border: isSelected ? '6px solid #0284c7' : '2px solid #94a3b8',
            backgroundColor: '#fff',
            marginTop: '2px',
            boxSizing: 'border-box',
          }}
        />
        <span
          style={{
            fontSize: '0.98rem',
            lineHeight: 1.45,
            fontWeight: isSelected ? 600 : 400,
            color: '#0f172a',
          }}
        >
          {opt.label}
        </span>
      </div>
    );
  };

  return (
    <section className="section" style={{ paddingTop: '110px', paddingBottom: '60px' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <div
          className="glass"
          style={{
            padding: '36px 32px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255,255,255,0.95)',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(2, 132, 199, 0.12)',
                  color: '#0284c7',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                Reply Requested by 22 November
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', margin: '0 0 8px 0' }}>
                Flare Task Force Meeting in Oslo 2027 – Preferred Dates and Availability
              </h2>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  background: '#fff',
                  color: '#475569',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                Back to Main Website
              </button>
            )}
          </div>

          <p style={{ color: '#334155', lineHeight: 1.6, marginTop: '8px', marginBottom: '24px' }}>
            Dear Flare Task Force Members, we are currently planning the Flare Task Force meeting in Oslo in 2027 and would appreciate your feedback on the proposed dates. Please type your name and indicate which option best describes your availability for both the preferred April dates and the alternative May dates.
          </p>

          {submitted ? (
            <div
              style={{
                padding: '28px',
                borderRadius: '16px',
                backgroundColor: 'rgba(22, 163, 74, 0.08)',
                border: '1.5px solid rgba(22, 163, 74, 0.35)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '8px' }}>✅</div>
              <h3 style={{ fontSize: '1.35rem', color: '#15803d', margin: '0 0 8px 0' }}>
                Thank you, {finalName}! Your availability has been recorded.
              </h3>
              <p style={{ color: '#334155', margin: '0 0 16px 0', fontSize: '0.95rem' }}>
                Your response has been saved for the Flare Task Force organizing committee:
              </p>
              <div
                style={{
                  textAlign: 'left',
                  background: '#fff',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  marginBottom: '20px',
                  fontSize: '0.92rem',
                  color: '#0f172a',
                }}
              >
                <div style={{ marginBottom: '8px' }}>
                  <strong>Preferred Dates (14–15 April 2027):</strong>
                  <div style={{ color: '#0284c7', marginTop: '2px' }}>
                    {APRIL_OPTIONS.find((o) => o.value === aprilChoice)?.label}
                  </div>
                </div>
                <div>
                  <strong>Alternative Dates (10–11 May 2027):</strong>
                  <div style={{ color: '#0284c7', marginTop: '2px' }}>
                    {MAY_OPTIONS.find((o) => o.value === mayChoice)?.label}
                  </div>
                </div>
                {comments && (
                  <div style={{ marginTop: '8px' }}>
                    <strong>Comments:</strong> {comments}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: '1px solid #0284c7',
                  background: '#fff',
                  color: '#0284c7',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Modify Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Participant Name */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#0f172a',
                    marginBottom: '8px',
                  }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Type your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.98rem',
                    backgroundColor: '#fff',
                    color: '#0f172a',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Preferred Dates: 14-15 April 2027 */}
              <div
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  marginBottom: '24px',
                }}
              >
                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', color: '#0f172a' }}>
                  Preferred Dates: 14–15 April 2027 *
                </h3>
                <p style={{ margin: '0 0 14px 0', fontSize: '0.9rem', color: '#475569' }}>
                  Participants would need to arrive in Oslo on <strong>13 April</strong> in order to be ready for the meeting, which will begin on 14 April.
                </p>
                {APRIL_OPTIONS.map((opt) => renderOptionBox(opt, aprilChoice, setAprilChoice))}
              </div>

              {/* Alternative Dates: 10-11 May 2027 */}
              <div
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  marginBottom: '24px',
                }}
              >
                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', color: '#0f172a' }}>
                  Alternative Dates: 10–11 May 2027 *
                </h3>
                <p style={{ margin: '0 0 14px 0', fontSize: '0.9rem', color: '#475569' }}>
                  If the April dates are not feasible, the alternative dates under consideration are 10–11 May 2027. Participants would need to arrive in Oslo on the evening of <strong>9 May</strong> in order to be ready for the meeting start on 10 May.
                </p>
                {MAY_OPTIONS.map((opt) => renderOptionBox(opt, mayChoice, setMayChoice))}
              </div>

              {/* Optional comments */}
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    color: '#334155',
                    marginBottom: '6px',
                  }}
                >
                  Optional Comments (if any)
                </label>
                <textarea
                  rows={2}
                  placeholder="Optional notes regarding your travel or availability..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {error && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#b91c1c',
                    fontSize: '0.92rem',
                    marginBottom: '16px',
                    fontWeight: 500,
                  }}
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  padding: '15px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  cursor: submitting ? 'wait' : 'pointer',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.3)',
                }}
              >
                {submitting ? 'Saving your response...' : 'Submit Availability'}
              </button>

              {/* Reimbursement & Meeting Info Summary */}
              <div
                style={{
                  marginTop: '24px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  backgroundColor: '#f1f5f9',
                  fontSize: '0.88rem',
                  color: '#475569',
                  lineHeight: 1.55,
                }}
              >
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>
                  Accommodation, Meals, and Travel Reimbursement
                </strong>
                The host will cover two nights’ hotel accommodation (including breakfast), lunch and coffee breaks during both meeting days, and one dinner on the first evening. Travel expenses will be reimbursed after the submission of travel tickets and relevant documentation:
                <ul style={{ margin: '6px 0 6px 20px', padding: 0 }}>
                  <li>Non-European participants: up to <strong>EUR 1,000</strong></li>
                  <li>European participants: up to <strong>EUR 500</strong></li>
                </ul>
                <div>
                  <em>Reminder:</em> Upcoming Flare Task Force video conference on <strong>9 December</strong>.
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

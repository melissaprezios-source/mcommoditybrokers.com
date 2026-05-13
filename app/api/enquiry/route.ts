import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send email notification
    // 4. Return confirmation

    console.log('New enquiry received:', data);

    // For now, just return success
    // TODO: Implement actual email sending with a service like SendGrid, Resend, or AWS SES
    return NextResponse.json(
      { 
        success: true, 
        message: 'Enquiry received. We will review and contact you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}

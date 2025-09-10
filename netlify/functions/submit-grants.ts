import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const formData = new URLSearchParams(event.body || '')
    
    // Extract form fields
    const teamName = formData.get('teamName') || ''
    const email = formData.get('email') || ''
    const projectName = formData.get('projectName') || ''
    const url = formData.get('url') || ''
    const category = formData.get('category') || ''
    const amountUsd = formData.get('amountUsd') || ''
    const amountMcrt = formData.get('amountMcrt') || ''
    const mcrtPlan = formData.get('mcrtPlan') || ''
    const wallet = formData.get('wallet') || ''
    const description = formData.get('description') || ''
    const links = formData.get('links') || ''
    const hasBuild = formData.get('hasBuild') || ''

    // Create email content
    const emailSubject = `New MagicCraft Grants Application - ${projectName}`
    const emailBody = `
New Grants Application Received:

Team/Company: ${teamName}
Contact Email: ${email}
Project Name: ${projectName}
Website/Demo: ${url}
Category: ${category}
Requested Grant (USD): ${amountUsd}
Requested Grant (MCRT): ${amountMcrt}
MCRT Integration Plan: ${mcrtPlan}
BSC Wallet: ${wallet}
Description: ${description}
Links: ${links}
Has Working Build: ${hasBuild ? 'Yes' : 'No'}

Submitted at: ${new Date().toISOString()}
    `.trim()

    // Send email using Netlify's built-in email service
    const emailData = {
      to: 'marketing@magiccraft.io',
      from: 'noreply@magiccraft.io',
      subject: emailSubject,
      text: emailBody
    }

    // Use Netlify's email service
    const emailResponse = await fetch('https://api.netlify.com/api/v1/sites/serene-capybara-c35ae5/forms/grants/submissions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'marketing@magiccraft.io',
        subject: emailSubject,
        body: emailBody,
        data: {
          teamName,
          email,
          projectName,
          url,
          category,
          amountUsd,
          amountMcrt,
          mcrtPlan,
          wallet,
          description,
          links,
          hasBuild: hasBuild ? 'Yes' : 'No'
        }
      })
    })

    if (!emailResponse.ok) {
      console.error('Failed to send email:', await emailResponse.text())
    }

    // Redirect to success page
    return {
      statusCode: 302,
      headers: {
        Location: '/grants/success'
      }
    }

  } catch (error) {
    console.error('Error processing form:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    }
  }
}

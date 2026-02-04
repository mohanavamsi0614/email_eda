src/
  api/
    donation.controller.js

  infrastructure/
    eventBus.js
    redis.js

  email/
    EmailOrchestrator.js
    EmailDispatcher.js

    queue/
      emailQueue.js

    workers/
      emailWorker.js

    providers/
      SESProvider.js
      SendGridProvider.js
      SMTPProvider.js

    templates/
      donation_success_donor.hbs
      donation_success_owner.hbs
      otp.hbs
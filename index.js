const AWS = require('aws-sdk');​
/**
 * You should have preconfigured ~/.aws/credentials file
 * Also you should define AWS_REGION and AWS_PROFILE for node instance
 */
(async function () {
    const sqs = new AWS.SQS({});​
    const queue = 'TBD <queue name>';
    console.log('queue name:', queue);​
    const urlResponse = await sqs
        .getQueueUrl({
            QueueName: queue
        })
        .promise();
    console.log('queue url:', urlResponse.QueueUrl);​
    const payload = JSON.stringify({});

    await sqs
        .sendMessage({
            QueueUrl: urlResponse.QueueUrl,
            MessageBody: payload,
        })
        .promise();​
    console.log('sent message...');​
    // const msgResponse = await sqs
    //     .receiveMessage({
    //         QueueUrl: urlResponse.QueueUrl,
    //         WaitTimeSeconds: 20,
    //     })
    //     .promise();
    // console.log('received message:', msgResponse.Messages[0].Body);
}()).catch((error) => {
    console.error(error);
    process.exit(1);
});
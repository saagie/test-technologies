
exports.getDynamicValues = () => {
    return [
        {
            id: 'value1',
            label: 'First Value'
        },
        {
            id: 'value2',
            label: 'Second Value'
        },
        {
            id: 'value3',
            label: 'Third Value'
        }
    ];
};

const JobStatus = {
    AWAITING: 'AWAITING',
    REQUESTED: 'REQUESTED',
    QUEUED: 'QUEUED',
    RUNNING: 'RUNNING',
    SUCCEEDED: 'SUCCEEDED',
    KILLING: 'KILLING',
    KILLED: 'KILLED',
    FAILED: 'FAILED',
};

exports.start = async ({ connection, parameters }) => {
    console.log('start job with connection', connection, 'and parameters', parameters);
    return { jobId: Math.floor(Math.random() * 100) };
};

exports.stop = async ({ connection, parameters, payload }) => {
    console.log('stop job with connection', connection, ', parameters', parameters, 'and payload', payload);
};

exports.getStatus = async ({ connection, parameters, payload }) => {
    console.log('getStatus of job with connection', connection, ', parameters', parameters, 'and payload', payload);
    const n = Math.random();
    if (n < 0.9) {
        return JobStatus.RUNNING;
    }
    return JobStatus.SUCCEEDED;
};

exports.getLogs = async ({ connection, parameters, payload }) => {
    throw new Error("Test error generated in the script");
};

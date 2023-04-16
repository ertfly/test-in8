db.createUser({
    user: 'telemetry',
    pwd: 'Tele@1029',
    roles: [
        {
            role: 'dbOwner',
            db: 'telemetry',
        },
    ],
});
const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        key: process.env.SECRET_KEY,
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Port ${PORT}! Squeaky Squeak!`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// const authRoutes = require('./routes/auth-routes');
// app.use('/auth', authRoutes);
// const projectRoutes = require('./routes/project-routes');
// app.use('/projects', projectRoutes);
// const personRoutes = require('./routes/person-routes');
// app.use('/person', personRoutes);

app.use('*', (req, res) => {
    res.status(400).json({
        message: 'Not found!',
    });
});
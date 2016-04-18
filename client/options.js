var chart;
/*
 * Function to draw the gauge
 */
function buildChart() {
    
    var data = new Array();
    
    data[0] = [0];
     data[1] = [0];
     data[2] = [0];

    
    if(Session.get('one') !== undefined)
        data[0] = Session.get('one');
    
     if(Session.get('two') !== undefined)
        data[1] = Session.get('two');
    
     if(Session.get('three') !== undefined)
        data[2] = Session.get('three');
    
    chart = $('#optionsChart').highcharts({
        
        chart: {
            type: 'bar'
           
        },
       

       title: {
           text: 'Voting Results'},
      


       xAxis: {
          //       type: 'linear', 
            categories: ['Option One', 'Option Two', 'Option Three'],
          
           
        },
        
        yAxis: {

               
            },
            
 
        series: [{
            name: 'Votes',
            data: data,
             color: 'rgb(214, 53, 53)'
    
        }],
        
    });
}


/*
 * Call the function to build the chart when the template is rendered
 */
Template.options.rendered = function () {
    Tracker.autorun(function () {
       buildChart();
    });
}


Template.options.events = {
    
    'click #one': function (event, template) {
         Candidate.update({_id: "1"}, {$inc: {votes: 1} });
        var oneVotes = Candidate.findOne({_id:"1"}).votes;
                                   
        Session.set('one', parseInt(oneVotes));
    },
       'click #two': function (event, template) {
         Candidate.update({_id: "2"}, {$inc: {votes: 1} });
        var twoVotes = Candidate.findOne({_id:"2"}).votes;
                                     
        Session.set('two', parseInt(twoVotes));
    },
         'click #three': function (event, template) {
         Candidate.update({_id: "3"}, {$inc: {votes: 1} });
        var threeVotes = Candidate.findOne({_id:"3"}).votes;
                                    
        Session.set('three', parseInt(threeVotes));
    }
}
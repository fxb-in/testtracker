import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const AdminPage = ({ navigation }) => {
  // Sample data for demonstration
  const attendanceData = [
    { id: '1', date: '2024-04-01', status: 'Present' },
    { id: '2', date: '2024-04-02', status: 'Absent' },
    // Add more attendance data as needed
  ];

  const feeList = [
    { id: '1', name: 'Tuition Fee', amount: '$100' },
    { id: '2', name: 'Transportation Fee', amount: '$50' },
    // Add more fee list items as needed
  ];

  const newlyRegisteredStudents = [
    { id: '1', name: 'John Doe', age: 16, grade: '10th' },
    { id: '2', name: 'Jane Smith', age: 15, grade: '9th' },
    // Add more newly registered students as needed
  ];

  const handleAttendancePress = () => {
    // Navigate to another page for attendance details
    navigation.navigate('AttendanceDetailsPage');
  };

  const handleFeeListPress = () => {
    // Navigate to another page for fee list
    navigation.navigate('FeeListPage');
  };

  const handleNewlyRegisteredPress = () => {
    // Navigate to another page for newly registered students
    navigation.navigate('NewlyRegisteredPage');
  };

  // Render item components and other sections...

  return (
    <View style={styles.container}>
      {/* Attendance Details */}
      <TouchableOpacity onPress={handleAttendancePress}>
        <View style={[styles.itemContainer, styles.attendanceDetails]}>
          <Text style={styles.sectionHeader}>Attendance Details</Text>
          {/* Render additional information or icons as needed */}
        </View>
      </TouchableOpacity>

      {/* Fee List */}
      <TouchableOpacity onPress={handleFeeListPress}>
        <View style={[styles.itemContainer, styles.feeList]}>
          <Text style={styles.sectionHeader}>Fee List</Text>
          {/* Render additional information or icons as needed */}
        </View>
      </TouchableOpacity>

      {/* Newly Registered Students */}
      <TouchableOpacity onPress={handleNewlyRegisteredPress}>
        <View style={[styles.itemContainer, styles.newlyRegistered]}>
          <Text style={styles.sectionHeader}>Newly Registered Students</Text>
          {/* Render additional information or icons as needed */}
        </View>
      </TouchableOpacity>

      {/* Render other sections similarly */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#bbd6ee'
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  attendanceDetails: {
    backgroundColor: '#61a0d9',
  },
  feeList: {
    backgroundColor: '#61a0d9',
  },
  newlyRegistered: {
    backgroundColor: '#61a0d9',
  },
});

export default AdminPage;

